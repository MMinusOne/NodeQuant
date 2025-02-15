import { CandlestickSeries, createChart } from 'lightweight-charts'

const chartContainer = document.querySelector('#chart-container');

const reportId = window.location.toString().at(-2);

async function chart() {
    const chart = createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: chartContainer.clientHeight,
    });

    const candleStickSeries = chart.addSeries(CandlestickSeries);

    const priceData = await fetch(`http://localhost:2555/${reportId}/price-data`).then((r) => r.json());

    candleStickSeries.setData(priceData.map((candle) => {
        return {
            open: candle.at(1),
            high: candle.at(2),
            low: candle.at(3),
            close: candle.at(4),
            time: candle.at(0),
        }
    }))

    chart.timeScale().fitContent();
}

chart();