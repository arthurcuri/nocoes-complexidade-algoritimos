// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
  function draw() {
    try {
      // compile the expression once
      const expressionF = document.getElementById('eqF').value;
      const expressionG = document.getElementById('eqG').value;
      const c1 = document.getElementById('c1').value;
      const c2 = document.getElementById('c2').value;
      const N = document.getElementById('N').value;
  
      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(0, parseInt(N)+1, 1).toArray();
      var layout = { title: 'Comportamento Assintótico', };
  
      const exprF = math.compile(expressionF);
      const yValuesF = xValues.map(function (n) { return exprF.evaluate({n: n}); });
      
      if(expressionG == ''){
        trace1 = { x: xValues, y: yValuesF, type: 'scatter',  name: 'f(n)' };
        data = [trace1];
        Plotly.newPlot('plot', data, layout);
      } else {
        if(c1 == '' && c2 == '') {
          const exprG = math.compile(expressionG);
          const yValuesG = xValues.map(function (n) { return exprG.evaluate({n: n}); });
          trace1 = { x: xValues, y: yValuesF, type: 'scatter',  name: 'f(n)' };
          trace2 = { x: xValues, y: yValuesG, type: 'scatter',  name: 'g(n)' };
          data = [trace1, trace2];
          Plotly.newPlot('plot', data, layout);
        } else {
          if(c1 != '' && c2 == '') {
            const exprG1func = c1.concat("*(",expressionG,")");
            const exprG = math.compile(exprG1func);
            const yValuesG = xValues.map(function (n) { return exprG.evaluate({n: n}); });
            trace1 = { x: xValues, y: yValuesF, type: 'scatter',  name: 'f(n)' };
            trace2 = { x: xValues, y: yValuesG, type: 'scatter',  name: 'C1*g(n)' };
            data = [trace1, trace2];
            Plotly.newPlot('plot', data, layout);
          } else {
            if(c1 == '' && c2 != '') {
              const exprG1func = c2.concat("*(",expressionG,")");
              const exprG = math.compile(exprG1func);
              const yValuesG = xValues.map(function (n) { return exprG.evaluate({n: n}); });
              trace1 = { x: xValues, y: yValuesF, type: 'scatter',  name: 'f(n)' };
              trace2 = { x: xValues, y: yValuesG, type: 'scatter',  name: 'C2*g(n)' };
              data = [trace1, trace2];
              Plotly.newPlot('plot', data, layout);
            } else {
              const exprG1func = c1.concat("*(",expressionG,")");
              const exprG1 = math.compile(exprG1func);
              const exprG2func = c2.concat("*(",expressionG,")");
              const exprG2 = math.compile(exprG2func);
              const yValuesG1 = xValues.map(function (n) { return exprG1.evaluate({n: n}); });
              const yValuesG2 = xValues.map(function (n) { return exprG2.evaluate({n: n}); });
              trace1 = { x: xValues, y: yValuesF, type: 'scatter',  name: 'f(n)' };
              trace2 = { x: xValues, y: yValuesG1, type: 'scatter',  name: 'C1*g(n)' };
              trace3 = { x: xValues, y: yValuesG2, type: 'scatter',  name: 'C2*g(n)' };
              data = [trace1, trace2, trace3];
              Plotly.newPlot('plot', data, layout);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }
  
  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };
  
  draw();
  