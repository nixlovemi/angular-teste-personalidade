import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
};

@Component({
  selector: 'app-pg-finish',
  templateUrl: './pg-finish.component.html',
  styleUrls: ['./pg-finish.component.css']
})
export class PgFinishComponent implements OnInit {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    shark : number;
    cat   : number;
    eagle : number;
    wolf  : number;

    constructor(
        private actRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.actRoute.params.subscribe(routeParams => {
            this.load(parseInt(routeParams.A), parseInt(routeParams.C), parseInt(routeParams.I), parseInt(routeParams.O));
        });
    }

    load(a:number, c:number, i:number, o:number) {
        this.shark = a * 4;
        this.cat   = c * 4;
        this.eagle = i * 4;
        this.wolf  = o * 4;

        this.chartOptions = {
            series: [
                {
                    /*name: "",*/
                    data: [this.shark, this.cat, this.eagle, this.wolf]
                }
            ],
            chart: {
                height: 600,
                type: "radar",
            },
            /*title: {
                text: "Basic Radar Chart"
            },*/
            xaxis: {
                categories: ["Tubarão", "Gato", "Águia", "Lobo"],
            },
            yaxis: {
                min: 0,
                max: 110,
                tickAmount: 11,
            },
        };
    }

    restart() {
        this.router.navigate(['start']);
    }
}
