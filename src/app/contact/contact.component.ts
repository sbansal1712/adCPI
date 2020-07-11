import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      CPI: ["", Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    } else {
      const ad = {
        title: this.messageForm.get("title").value,
        description: this.messageForm.get("description").value,
        CPI: this.messageForm.get("CPI").value,
      };
      this.dataService.addNewAd(ad).subscribe((data: any) => {
        console.log(data);
      });
    }
    this.success = true;
  }
}
