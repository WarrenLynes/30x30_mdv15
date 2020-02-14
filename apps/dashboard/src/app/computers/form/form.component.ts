import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Computer } from '@mdv15/core-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv15-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() selected: Computer;
  @Output() save = new EventEmitter<Computer>();
  @Output() delete = new EventEmitter<Computer>();
  @Output() cancel = new EventEmitter<Computer>();

  form: FormGroup;

  constructor() { this.buildForm(); }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) : void{
    if( changes.selected &&  changes.selected) {
      this.buildForm();
    }
  }

  buildForm() {
    if(this.selected && this.selected.id) {
      this.form = new FormGroup({
        id: new FormControl(this.selected.id),
        title: new FormControl(this.selected.title),
        details: new FormControl(this.selected.details),
        coolLevel: new FormControl(this.selected.coolLevel),
        approved: new FormControl(this.selected.approved)
      });
    } else {
      this.form = new FormGroup({
        title: new FormControl(''),
        details: new FormControl(''),
        coolLevel: new FormControl(0),
        approved: new FormControl(null)
      });
    }
  }

  onSave() {
    this.save.emit({...this.selected, ...this.form.value});
    this.form.reset();
  }

  onCancel() {
    this.form.reset();
    this.cancel.emit();
  }

}
