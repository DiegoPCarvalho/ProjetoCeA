import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

export default function graficoGeral(props) {
    const pieData = [
        { name: 'S4M', y: 30 },
        { name: 'ZT230', y: 50 },
        { name: 'SD360', y: 10 },
        { name: 'ALEGRO 4206', y: 10 },
      ]

    const dados = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
          type: props.tipo,
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
            text: 'Ordem de Serviço'
          },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
            innerSize: 100,
            depth: 45,
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
        series: [
          {
            name: 'QTD',
            colorByPoint: true,
            data: pieData
          }
        ]
      };

    return(
        <div>
            <HighChartsReact highcharts={HighCharts} options={dados} />
        </div>
    )
}