import React, { Component } from 'react';
import Dashboard, { addWidget } from 'react-dazzle';

// App components
import Header from './Header';
import EditBar from './EditBar';
import Container from './Container';
import AddWidgetDialog from './AddWidgetDialog';
import CustomFrame from './CustomFrame';

// Widgets of the dashboard.
import BarChart from './widgets/BarChart';
import LineChart from './widgets/LineChart';
import DoughnutChart from './widgets/DoughnutChart';
import Messages from './widgets/Messages';
import Workload from './widgets/Workload';
import Slaves from './widgets/Slaves';
import Resources from './widgets/Resources';
import Reports from './widgets/Reports';
import Settings from './widgets/Settings';
import VisitedSets from './widgets/VisitedSets';
import RecentJobs from './widgets/RecentJobs';
import LiveStream from './widgets/LiveStream';

// We are using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css';

// Default styes of dazzle.
import 'react-dazzle/lib/style/style.css';

// Our styles
import '../styles/custom.css';
//import '../styles/nc_style.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Widgets that are available in the dashboard
      widgets: {
        BarChartWidget: {
          type: BarChart,
          title: 'BarChart',
        },
        DoughnutChartWidget: {
          type: DoughnutChart,
          title: 'DoughnutChart',
        },
        LineChartWidget: {
          type: LineChart,
          title: 'LineChart',
        },
        MessagesWidget: {
          type: Messages,
          title: 'Messages',
        },
        WorkloadWidget: {
          type: Workload,
          title: 'Workload',
        },
        SlavesWidget: {
          type: Slaves,
          title: 'Slaves',
        },
        SettingsWidget: {
          type: Settings,
          title: 'Settings',
        },
        ResourcesWidget: {
          type: Resources,
          title: 'Resources',
        },
        ReportsWidget: {
          type: Reports,
          title: 'Reports',
        },
        VisitedSetsWidget: {
          type: VisitedSets,
          title: 'My Recently Visted Sets',
        },
        RecentJobsWidget: {
          type: RecentJobs,
          title: 'My Recent Jobs',
        },
        LiveStreamWidget: {
          type: LiveStream,
          title: 'Live Event Stream',
        },
      },
      // Layout of the dashboard
      layout: {
        rows: [
	  {
            columns: [
              {
                className: 'col-md-4 col-sm-4 col-xs-4',
                widgets: [
                  {key: 'WorkloadWidget'},
                  {key: 'MessagesWidget'}
                ],
              },
              {
                className: 'col-md-4 col-sm-4 col-xs-4',
                widgets: [
                  {key: 'SlavesWidget'},
                  {key: 'ReportsWidget'}
                ],
              },
              {
                className: 'col-md-4 col-sm-4 col-xs-4',
                widgets: [
                  {key: 'ResourcesWidget'},
                  {key: 'SettingsWidget'}
                ],
              },
	    ]
          },
	  {
            columns: [
              {
                className: 'col-md-4 col-sm-4 col-xs-4',
                widgets: [
                  {key: 'VisitedSetsWidget'}
                ],
              },
              {
                className: 'col-md-8 col-sm-8 col-xs-8',
                widgets: [
                  {key: 'RecentJobsWidget'}
                ],
              },
	    ]
          }
        ],

      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  /**
   * When a widget is removed, the layout should be set again.
   */
  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * Adds new widgget.
   */
  onAdd = (layout, rowIndex, columnIndex) => {
    // Open the AddWidget dialog by seting the 'isModalOpen' to true.
    // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
    //  This will be used later when user picks a widget to add.
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  /**
   * When a widget moved, this will be called. Layout should be given back.
   */
  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * This will be called when user tries to close the modal dialog.
   */
  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return (
    <Container>
      <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection}/>
      <Header />
      <EditBar onEdit={this.toggleEdit} />
      <Dashboard
        frameComponent={CustomFrame}
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        editable={this.state.editMode}
        onAdd={this.onAdd}
        onMove={this.onMove}
        addWidgetComponentText="Add New Widget"
        />

    </Container>
    );
  }

  /**
   * Toggeles edit mode in dashboard.
   */
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  /**
   * When user selects a widget from the modal dialog, this will be called.
   * By calling the 'addWidget' method, the widget could be added to the previous requested location.
   */
  handleWidgetSelection = (widgetName) => {
    const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;

    /**
     * 'AddWidget' method gives you the new layout.
     */
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, widgetName),
    });

    // Close the dialogbox
    this.onRequestClose();
  }
}

export default App;
