/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
 
  var element = document.getElementById("myDIV");
   element.classList.toggle("show");
   document.getElementById("myDropdown").classList.toggle("show");
   

}
/****/
const root = document.querySelector(":root"),
      inputs = document.querySelectorAll("input[name='theme']");

const theme = localStorage.getItem("theme-color");

const updateRoot = value => root.style.setProperty("--theme-color", `var(--${value})`);

for(const input of inputs) {
  if(theme && input.value === theme) {
    input.checked = true;
    
    updateRoot(theme);
  }
  
  input.onchange = e => {
    updateRoot(e.target.value);
    
    localStorage.setItem("theme-color", e.target.value);
  }
}/*** */
 ////
 var options = {

  series: [{
  name: '91',
  data: [44, 55, 57, 56 ],

 
}, {
  name: '95',
  data: [76, 85, 101,66],
  
}, {
  name: 'ديزل',
  data: [35, 41, 36, 26],

}],
  chart: {
  type: 'bar',
  height:400,
  parentHeightOffset: 0,
  stackType: '100%',
  width: "100%",
},
plotOptions: {
  bar: {
    horizontal: false,
    barHeight: '100%',
    columnWidth: '55%',
    endingShape: 'rounded',
    colors:{
      backgroundBarColors: ['#F2F4F6', '#F2F4F6', '#F2F4F6', '#F2F4F6'],

    } 
  }
  },
dataLabels: {
  enabled: true,
  
},

stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},

colors: [ '#28c76f','#EA5455', '#FFEB3B'],
xaxis: {
  categories: ['شركة الامل', 'شركة المستقبل', 'الاهرام', 'النور'],
},
yaxis: {
  title: {
    text: '$ (thousands)',
    
  }
  
},
fill: {
  opacity: 8,
  
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
    
  }
}
};

var chartes = new ApexCharts(document.querySelector("#chartes"), options);
chartes.render();

  /** chart*/
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['نعم',     11],
      ['لا',      2],
     
    ]);

    var options = {
      // title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
    /** chart-tow*/
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawCharte);
  
    function drawCharte() {
  
      var datae = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [' الاول',     11],
        [' الثانى',      2],
        [' الثالث',      8],

       
      ]);
  
      var optionse = {
        // title: 'My Daily Activities'
      };
  
      var charttow = new google.visualization.PieChart(document.getElementById('piechart-tow'));
  
      charttow.draw(datae, optionse);
    }
     /** chart-there*/
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawCharte3);
   
     function drawCharte3() {
   
       var datae3 = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         [' عدد ',     11],
         [' معدل ',      2],
        
 
        
       ]);
   
       var optionse = {
         // title: 'My Daily Activities'
       };
   
       var charttow3 = new google.visualization.PieChart(document.getElementById('piechart-there'));
   
       charttow3.draw(datae3, optionse);
     }
      /** chart-for*/
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawCharte4);
    
      function drawCharte4() {
    
        var datae4 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          [' عدد ',     11],
          [' معدل ',      2],
         
  
         
        ]);
    
        var optionse = {
          // title: 'My Daily Activities'
        };
    
        var charttow4 = new google.visualization.PieChart(document.getElementById('piechart-for'));
    
        charttow4.draw(datae4, optionse);
      }
      /** chart-fife*/
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawCharte5);
    
      function drawCharte5() {
    
        var datae5 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          [' نعم ',     11],
          [' لا ',      2],
         
  
         
        ]);
    
        var optionse = {
          // title: 'My Daily Activities'
        };
    
        var charttow5 = new google.visualization.PieChart(document.getElementById('piechart-fife'));
    
        charttow5.draw(datae5, optionse);
      }


     