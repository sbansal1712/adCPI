import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-ad",
  templateUrl: "./register-ad.component.html",
  styleUrls: ["./register-ad.component.scss"],
})
export class RegisterADComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  ads: Object;
  minPrice: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      Title: ["", Validators.required],
      Description: ["", Validators.required],
      CPI: [500, Validators.required],
      Website: ["", Validators.required],
    });
    this.getAllAds();
  }

  getAllAds() {
    this.dataService.getAllAds().subscribe((data) => {
      this.ads = data;
      this.minPrice = this.ads[1].CPI;
      this.minPrice = this.minPrice + 1;
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    } else {
      const ad = {
        Title: this.messageForm.get("Title").value,
        Description: this.messageForm.get("Description").value,
        CPI: this.messageForm.get("CPI").value,
        Website: this.messageForm.get("Website").value,
      };
      this.dataService.addNewAd(ad).subscribe((data: any) => {
        this.router.navigate(["/home"]);
      });
    }
    this.success = true;
  }
}
