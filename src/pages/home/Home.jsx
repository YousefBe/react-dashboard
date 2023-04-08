import React from "react";
import "./Home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featureed/Featured";
import Chart from "../../components/charts/Chart";
import Table from "../../components/table/Table";

function Home() {
  return (
    <div className="home">
       <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        {/* eof widgeets */}

        {/* charts */}
        <div className="charts">
          <Featured />
          <Chart  title="Last 6 Months (Revenue)" aspect={3 / 1}/>
        </div>
        {/* eof charts */}


        <div className="list-container">
          <div className="list-title">
            Latest Transactions
          </div>
          <Table/>
        </div>
      
    </div>
  );
}

export default Home;
