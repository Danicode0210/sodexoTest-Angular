export class Persona {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    comuna: string;
  
    constructor(
      id: number,
      name: string,
      lastName: string,
      phone: string,
      comuna: string
    ) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.phone = phone;
      this.comuna = comuna;
    }
  }
  