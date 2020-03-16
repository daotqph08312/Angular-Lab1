import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Thích ca mô ni Thiện Trần";
  place = [
    {
      id: 1,
      name: "Tháp Rùa – Hồ Hoàn Kiếm",
      img:
        "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/ho-hoan-kiem/Gioi-thieu-doi-net-ve-Ho-Hoan-Kiem-Ho-Guom-o-Ha-Noi-3.jpg",
      S: "100m2",
      name_celebrity: "Lý thái tổ",
      img_celebrity:
        "https://i-vnexpress.vnecdn.net/2018/08/14/gg-1534251255-5397-1534251332_660x0.jpg",
      born_year: 1570,
      die_year: 1620
    },
     {
      id: 2,
      name: "Tháp Rùa – Hồ Hoàn Kiếm",
      img:
        "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/ho-hoan-kiem/Gioi-thieu-doi-net-ve-Ho-Hoan-Kiem-Ho-Guom-o-Ha-Noi-3.jpg",
      S: "100m2",
      name_celebrity: "Lý thái tổ",
      img_celebrity:
        "https://i-vnexpress.vnecdn.net/2018/08/14/gg-1534251255-5397-1534251332_660x0.jpg",
      born_year: 1570,
      die_year: 1620
    },
     {
      id: 3,
      name: "Tháp Rùa – Hồ Hoàn Kiếm",
      img:
        "https://znews-photo.zadn.vn/w660/Uploaded/zagttv/2017_09_03/P12609563_MUAC.jpg",
      S: "100m2",
      name_celebrity: "Lý thái tổ",
      img_celebrity:
        "https://i-vnexpress.vnecdn.net/2018/08/14/gg-1534251255-5397-1534251332_660x0.jpg",
      born_year: 1570,
      die_year: 1620
    }
  ];
  removePlace(p) {
    this.place = this.place.filter(function(val,index) {
      return val.id != p.id;
    });
  }
  addPlace = {
    id: null,
    name: null,
    img: null,
    S: null,
    name_celebrity: null,
    img_celebrity: null,
    born_year: null,
    die_year: null
  };
  addnewPlace() {
    if (this.addPlace.id == null) {
      let max = 0;
      for (let i = 0; i < this.place.length; i++) {
        if (this.place[i].id >= max) {
          max = this.place[i].id;
        }
      }
       this.addPlace.id = max++;
       this.place.push(this.addPlace);
    }else{
      this.place.forEach(function(val){
          this.val = this.addPlace;
      });
    }
   
  }
}
