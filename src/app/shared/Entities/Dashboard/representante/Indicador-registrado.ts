export class IndicadorRegistro{
    public selected: boolean = false;
    public id: string | undefined;
    public processo: string | undefined;
    public nomeIndicador: string | undefined;
    public unidadeMedida: string | undefined;
    public frequencia: string | undefined;
    public descricao: string | undefined;

    public ToString():string{
        return `${this.id}${this.processo}${this.nomeIndicador}${this.unidadeMedida}${this.frequencia}${this.descricao}`;
    }

    public SearchFor(text:string): boolean {
        return this.ToString().includes(text);
    }
}