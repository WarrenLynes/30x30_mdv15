import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from '@mdv15/core-data';
import { ComputersFacade } from '@mdv15/core-state';

@Component({
  selector: 'mdv15-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  computers$: Observable<Computer[]> = this.facade.allComputers$;
  selected$: Observable<Computer> = this.facade.selectedComputer$;

  constructor(
    public facade: ComputersFacade
  ) { }

  ngOnInit() {
    this.facade.loadComputers();
  }

  save(entity: Computer) {
    if(entity.id) {
      this.facade.updateComputer(entity);
    } else {
      this.facade.createComputer(entity);
    }
    this.facade.selectComputer(null);
  }

  delete(entity: Computer) {
    this.facade.deleteComputer(entity);
    this.facade.selectComputer(null);
  }

  cancel(entity: Computer) {
    this.facade.selectComputer(null);
  }
}
