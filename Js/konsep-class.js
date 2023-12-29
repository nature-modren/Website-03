//konsep class pada javascript

class user {
    constructor(nama, umur, alamat, hobi) {
        this.nama = nama,
        this.umur = umur, 
        this.alamat = alamat;
        this.hobi = hobi;
    }
    greet() {
        return `halo ${this.nama}`;
    }
}

database = [
    (user1 = new user("Amri", 28, "jl.bantan", ["musik", "ngoding"])),

    (user2 = new user("budi", 27, "jl.pramuka", ["anime", "ngambar"])),

    (user3 = new user("wahyu", 19, "jl.soedirman", ["lukis"]))
];

console.table(database);
console.log(database);
