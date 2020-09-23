export class Noticia {
    constructor(
		public titulo: string,
		public texto: string,
        public fechaPublicacion: Date,
        public estado: boolean
    ){}
}