import React from "react";
import { connect } from "react-redux";
import Chart from "react-google-charts";




const mapStateToProps = state => {
  return { spotPrices: state.spotPrices };
};

  
const ConnectedList = ({ spotPrices }) => (



  <div>

  <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={spotPrices}






  options={{
    hAxis: {
      title: 'Date',
    },
    vAxis: {
      title: 'Precio USD',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
