import React from "react";
import ReactDOM from "react-dom";
import { div2PDF } from "./convert/pdfConvert";
import { svgToPng } from "./convert/pngConvert";
import { fbData } from "./data/fbData";
import { twData } from "./data/twData";
import { BsFileEarmarkImage, BsFileEarmarkPdf } from "react-icons/bs";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import FileSaver from "file-saver";

class App extends React.Component {
  handleDownload = async () => {
    const chart = this.currentChart;
    let chartSVG = ReactDOM.findDOMNode(chart).children[0];

    const pngData = await svgToPng(chartSVG, 600, 300);
    FileSaver.saveAs(pngData, "test.png");
  };

  render() {
    return (
      <div className='flex-container'>
        <div className=' chart div2PDF'>
          <LineChart
            ref={(chart) => (this.currentChart = chart)}
            width={600}
            height={300}
            data={fbData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
          {/* BsFileEarmarkPdf */}
          {/* BsFileEarmarkImage */}
          <div className='btn'>
            <BsFileEarmarkImage onClick={this.handleDownload} />
            <BsFileEarmarkPdf onClick={(e) => div2PDF(e)} />

            {/* <button onClick={(e) => div2PDF(e)}>Download PDF</button>
          <button onClick={this.handleDownload}>Download PNG</button> */}
          </div>
        </div>

        <br />
        <div className='chart'>
          <BarChart width={600} height={300} data={twData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
          <div className='btn'>
            <BsFileEarmarkImage onClick={this.handleDownload} />
            <BsFileEarmarkPdf onClick={(e) => div2PDF(e)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
