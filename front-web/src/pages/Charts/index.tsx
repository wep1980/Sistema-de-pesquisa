import React, { useState, useEffect } from 'react';
import Filters from '../../components/Filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options'
import Chart from 'react-apexcharts'; // Instalação da biblioteca de graficos - npm install react-apexcharts -- npm install apexcharts
import axios from 'axios';
import { buildBarSeries , getPlatformChartData, getGenderChartData} from './helpers' // Importando os algoritmos em javaScript de agrupamento

type PieChartData = {
    labels : string[];
    series : number[];
}

type BarCharData = {
    x : string;
    y : number;
}

/**
 * Para não dar erro no componente de grafico
 */
const initialPieData = {
    labels : [],
    series : []
}

const BASE_URL = 'http://localhost:8080';

/**
 * <Chart options={} /> -> Preparando o componente para receber uma Prop dinamicamente e recebendo um objeto
 * jacaScript
 */
const Charts = () => {

    /**
     * FUNCIONAMENTO DO useState()
     * barCharData -> Variavel que sera usada no componente.
     * setBarCharData -> função utilizada para atualizar o valor da variavel barCharData
     * useState<BarCharData[]>([]) -> inicializado com um array vazio ([])
     */
    const [barCharData, setBarCharData] = useState<BarCharData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    /**
     * Tudo que estiver aqui dentro sera executado assim que o componente charts carregar.
     * Faz a integração com Api.
     * function getData() {} -> Funcao assincrona (async) que busca os games e os records da pesquisa.
     * await -> espera a função terminar para executar o restante dela.
     * axios.get(`${BASE_URL}/records`) -> Busca todos os registros.
     * const barData -> Para preencher os graficos
     */
    useEffect(() => {
       async function getData() {
          const recordsResponse = await axios.get(`${BASE_URL}/records`);
          const gamesResponse = await axios.get(`${BASE_URL}/games`);

          const barData = buildBarSeries(gamesResponse.data , recordsResponse.data.content);
          setBarCharData(barData);

          const platformChartData = getPlatformChartData(recordsResponse.data.content);
          setPlatformData(platformChartData);

          const genderChartData = getGenderChartData(recordsResponse.data.content);
          setGenderData(genderChartData);
       }
       getData();
    }, [] )

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA"></Filters>
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="650"
                            series={[{ data: barCharData}]}
                        />
                    </div>
                </div>
                <div className="charts">
                  <div className="platform-chart">
                      <h2 className="chart-title">Plataformas</h2>
                      <Chart 
                        options={{...pieOptions, labels: platformData?.labels }}
                        type="donut"
                        series={ platformData?.series }
                        width="350"
                      />
                  </div>

                  <div className="gender-chart">
                      <h2 className="chart-title">Gêneros</h2>
                      <Chart 
                        options={{...pieOptions, labels: genderData?.labels }}
                        type="donut"
                        series={ genderData?.series }
                        width="350"
                      />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;