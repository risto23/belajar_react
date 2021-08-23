import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component{

  constructor() {
    super();
    this.state = {
      namaResto : 'Codepolitan',
      menuMakanan : [
        { nama : 'Ayam Bakar', harga : 25000, stock : 10},
        { nama : 'Nasi Goreng', harga : 20000, stock : 0},
      ],
      menuMinuman : [
        { id : 1, nama : 'Juice Melon', harga : 12500, stock : 10},
        { id : 2, nama : 'Juice Mangga', harga : 14000, stock : 0},
        { id : 3, nama : 'Juice Jeruk', harga : 10000, stock : 10},
        { id : 4, nama : 'Juice Tomat', harga : 14000, stock : 0},
        { id : 5, nama : 'Juice Alpukat', harga : 14000, stock : 0}
      ],
      namaPembeli:'',
      keterangan:'',
      jenisPembayaran:'',
    }
    
  };

  handleGantiNama = (nama) => {
    this.setState({ namaResto : nama,})
  }

  handleChangeNamaPembeli = (event) => {
    this.setState({ namaPembeli: event.target.value})
  }

  handleKeterangan = (event) => {
    this.setState({ keterangan: event.target.value})
  }


  handlePembayaran = (event) => {
    this.setState({ pembayaran: event.target.value})
  }

  handelChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name] : value,
    })
  }



  render(){
    return(

      
        <div className='App'>
          <h1>Cafe And Resto {this.state.namaResto}</h1>
          <button className="btn btn-primary" onClick={() => this.handleGantiNama('Coba-coba')}>Ganti Nama Resto</button>

          <div className="row" style={{marginTop : '10px'}}>
            <div className="col-md-4 offset-md-4">
              <form>
                <div className="form-group">
                  <label>Nama Pembeli</label>
                  <input 
                  className="form-control" 
                  name="namaPembeli" 
                  onChange={this.handelChange}
                  value={this.state.namaPembeli}
                  />
                  <small>Nama Pembeli : {this.state.namaPembeli}</small>
                </div>
                <div className="form-group">
                  <label>Keterangan</label>
                  <textarea 
                  className="form-control" 
                  name="keterangan" 
                  onChange={this.handelChange}
                  value={this.state.keterangan}
                  />
                  <small>Keterangan : {this.state.keterangan}</small>
                </div>
                <div className="form-group">
                  <label>Jenis Pembayaran</label>
                  <select 
                  className="form-control" 
                  name="jenisPembayaran" 
                  onChange={this.handelChange}
                  value={this.state.jenisPembayaran}
                  >
                  <option value="cash">Cash</option>
                  <option value="kartuKredit">Kartu Kredit</option>
                  <option value="voucher">Voucher</option>
                  </select>
                  <small>Jenis Pembayaran : {this.state.jenisPembayaran}</small>
                </div>
              </form>
            </div>
          </div>
          <h2>Menu Makanan</h2>
          <MenuMakanan 
          namaMenu={this.state.menuMakanan[0].nama} 
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}/>
          <MenuMakanan 
          namaMenu={this.state.menuMakanan[1].nama} 
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}/>
          <h2>Menu Minuman</h2>
          {this.state.menuMinuman.map((menu,index) =>
            <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga}/>
            )}
        </div>
    );
  }
}

export default App;
