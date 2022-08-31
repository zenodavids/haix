import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const div2PDF = (e) => {
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
    pdf.save("chart.pdf");
    but.style.display = "block";
  });
};
