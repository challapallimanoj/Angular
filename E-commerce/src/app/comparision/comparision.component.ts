import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";



@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.css']
})
export class ComparisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(function () {
      $('[data-filter="trigger"]').on("change", function () {
        var t = $(this).find("option:selected").val().toLowerCase();
    
        $('[data-filter="target"]').css("display", "none");
        $("#" + t).css("display", "table-row-group");
        if (t == "all") {
          $('[data-filter="target"]').css("display", "table-row-group");
        }
        $(this).css("display", "block");
      });
    }) 

  }



}
