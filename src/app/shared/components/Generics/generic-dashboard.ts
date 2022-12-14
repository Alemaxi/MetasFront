import { IHome } from '../../../../liguagens/Linguagem-modulos/home-linguagem-entities';
import { ResultadoEntity } from '../../Entities/Dashboard/resultado-entity';
import { IFormularioEntity } from '../../Entities/Dashboard/formulario-entity';
import { FaltaEntity } from '../../Entities/Dashboard/falta-entity';
import { IndicadorEntity } from '../../Entities/Dashboard/indicador-entity';
import { MesEnum } from '../../Enum/MesEnum';
import { DashboardService } from '../../../services/Dashboard/dashboard.service';
import { AppStateService } from '../../../services/app-state/app-state.service';

export class GenericDashboard {

    public selectedMes: MesEnum = MesEnum.jan;
    public dashboardLinguagem: IHome | undefined;
    public showMes: boolean = true;
    public resultadosList: ResultadoEntity[] = [];
    public formularioList: IFormularioEntity[] = [];
    public faltas: FaltaEntity[] =[];
    public itemsList: IndicadorEntity[] = [];

    constructor(
        protected DashboardGeneric: DashboardService,
        protected appStateGeneric: AppStateService) {

    }

    MesNavegado(mes: number): void {
        this.selectedMes = mes;

        if (this.selectedMes != 12) {
            this.showMes = true;
            this.DashboardGeneric.GetIndicadoresDataForMonth(mes).subscribe(x => {
                this.itemsList = x;
            });
        }
        else {

            this.DashboardGeneric.GetFaltas().subscribe(x => {
                this.faltas = x;
            });

            this.DashboardGeneric.GetResultados().subscribe(x => {
                this.resultadosList = x;
            });

            this.showMes = false;
        }
    }

    runInOnInit(): void {
        this.DashboardGeneric.GetFormularios().subscribe(x => {
            this.formularioList = x;
        });

        this.appStateGeneric.GetAppLinguagem().subscribe(x => {
            this.dashboardLinguagem = x.main.home;
        });

    }
}