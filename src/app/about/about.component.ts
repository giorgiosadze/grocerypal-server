import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    date: Date = new Date();
    dates: Array<any> = [];
    weekDays: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    months: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    openTimes: Array<string> = ["6:00 AM", "6:00 AM", "6:00 AM", "6:00 AM", "6:00 AM", "6:00 AM", "6:00 AM"];
    closeTimes: Array<string> = ["10:00 PM", "8:00 PM", "8:00 PM", "8:00 PM", "8:00 PM", "8:00 PM", "10:00 PM"];

    constructor() { }

    ngOnInit(): void {
        //get today and the next 6 days (a full week)
        for (let i = 0; i < 7; i++) {
            var day = {
                weekDay: this.weekDays[this.date.getDay()],//week day (Sunday, Monday, etc.)
                openTime: this.openTimes[this.date.getDay()],//time it opens on that week day
                closeTime: this.closeTimes[this.date.getDay()],//time it closes on that week day
                month: this.months[this.date.getMonth()],//month (Jan, Feb, etc.)
                dayNumber: this.date.getDate(),//day number (1-31)
            }
            this.dates.push(day);
            this.date.setDate(this.date.getDate() + 1);//add a day
        }
    }

}
