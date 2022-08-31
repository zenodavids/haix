import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const div2PDF = (e) => {
  const but = e.target;
  e.preventDefault();
  let input = window.document.getElementsByClassName("div2PDF")[0];

  html2canvas(input).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "pt");
    pdf.addImage(
      img,
      "png",
      input.offsetLeft,
      input.offsetTop,
      input.clientWidth,
      input.clientHeight
    );
    pdf.save("LineChart.pdf");
    but.style.display = "block";
  });
};
/////////////////////////////
const div2PDF2 = (e) => {
  const but = e.target;
  e.preventDefault();
  let input = window.document.getElementsByClassName("div2PDF2")[0];

  html2canvas(input).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "pt");
    pdf.addImage(
      img,
      "png",
      input.offsetLeft,
      input.offsetTop,
      input.clientWidth,
      input.clientHeight
    );
    console.log(
      input.offsetLeft,
      input.offsetTop,
      input.clientWidth,
      input.clientHeight
    );
    pdf.save("chart.pdf");
    but.style.display = "block";
  });
};
export { div2PDF, div2PDF2 };
