import React,{useState,useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import ReactApexChart from 'react-apexcharts';
import './Analytics.css';
import {useHistory} from 'react-router-dom';
import  DashNav from "../components/DashNav";

export default function Analytics() {
    const [dataAnalytics] = useState({
        series: [{
          name: 'Income',
          type: 'column',
          data: [15, 2, 25, 15, 25,28, 38, 46]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [11, 3, 31, 4, 41, 49, 65, 85]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 50, 68, 90]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'Advance Profile Analytics',
            align: 'left',
            offsetX: 10,
            offsetY:5
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
         
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
        
      
      });
      const history = useHistory();
      useEffect(() => {
        if(localStorage.getItem('app-access-token')===null){
            history.push("/signin");
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
        <>
              <Sidebar />
              <div style={{height:'110vh',overflowY:'scroll',border:'none'}}>
                
              <DashNav />
                
               <div className="container-fluid">
               <h3 className="text-heading-analytics" >Profile Analytics</h3 >
               <div className="analytics-views shadow-sm">
                    <div className="justify-content-between" style={{fontSize:14}}>
                        <span>
                        <strong className="mr-lg-4 ml-lg-2">Lifetime Analytics:</strong>{" "}
                        <span className="mr-lg-4">
                            <strong style={{fontWeight:'600'}}> <i className="fa fa-circle text-orange fa-0-5x mr-1"></i>  Views:</strong> 0
                        </span>
                        <strong style={{fontWeight:'600'}}> <i className="fa fa-circle text-green fa-0-5x mr-1"></i> Clicks:</strong> 0
                        </span>
                    </div>
               </div>
                <div className="chart shadow ml-auto mr-auto">
                    <ReactApexChart options={dataAnalytics.options} series={dataAnalytics.series} type="line" height={350}  />
                </div>
               </div>
                

    
                </div>
            
        </>
    )
}
