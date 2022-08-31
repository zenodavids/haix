import React from "react";
import ReactDOM from "react-dom";
import { div2PDF } from "./convert/pdfConvert";
import { svgToPng } from "./convert/pngConvert";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import FileSaver from "file-saver";

class App extends React.Component {
  // svgToPng = (svg, width, height) => {
  //   return new Promise((resolve, reject) => {
  //     let canvas = document.createElement("canvas");
  //     canvas.width = width;
  //     canvas.height = height;
  //     let ctx = canvas.getContext("2d");

  //     // Set background to white
  //     ctx.fillStyle = "#ffffff";
  //     ctx.fillRect(0, 0, width, height);

  //     let xml = new XMLSerializer().serializeToString(svg);
  //     let dataUrl = "data:image/svg+xml;utf8," + encodeURIComponent(xml);
  //     let img = new Image(width, height);

  //     img.onload = () => {
  //       ctx.drawImage(img, 0, 0);
  //       let imageData = canvas.toDataURL("image/png", 1.0);

  //       resolve(imageData);
  //     };

  //     img.onerror = () => reject();

  //     img.src = dataUrl;
  //   });
  // };

  handleDownload = async () => {
    const chart = this.currentChart;
    let chartSVG = ReactDOM.findDOMNode(chart).children[0];

    const pngData = await svgToPng(chartSVG, 600, 300);
    FileSaver.saveAs(pngData, "test.png");
  };

  render() {
    const data = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum
          cum omnis magnam est aliquid debitis molestias consequatur quam
          reprehenderit fuga aut voluptas repellendus placeat voluptates
          deleniti ipsa, quibusdam voluptatum animi sit minus ea! Id pariatur
          quisquam sequi consequatur consectetur dolorum reprehenderit corporis
          modi illum accusantium! Necessitatibus velit vel nisi ipsam. Facilis
          adipisci animi totam, nobis, dolore vel esse impedit, officiis est
          eveniet distinctio consequatur et praesentium autem quisquam ut itaque
          perferendis iste error culpa nam nemo minus laborum! Laudantium dolor
          optio ducimus, id nemo ab fugit magnam tenetur recusandae veniam,
          deleniti voluptates odio hic, quae voluptatibus vel animi illum.
        </p>
        <br />
        <br />
        <div className='chart div2PDF' style={{ alignContent: "center" }}>
          <LineChart
            ref={(chart) => (this.currentChart = chart)}
            width={600}
            height={300}
            data={data}
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
        </div>
        <div className='container'>
          <div className='btn'>
            <button onClick={(e) => div2PDF(e)}>Download PDF</button>
          </div>
          <div className='btn'>
            {" "}
            <button onClick={this.handleDownload}>Download PNG</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
