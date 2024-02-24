import React, { Component } from 'react';

export default class ProductForm extends Component {
    state = {
        id: '',
        tenSp: '',
        img: '',
        price: '',
    }
    handleChangeInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
  render() {
      console.log(this.state)
    return (
      <div className="container mt-5">
        <h2>Form Nhập Thông Tin Sản Phẩm</h2>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productId" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="Nhập ID sản phẩm"
                  onInput={this.handleChangeInput}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Tên Sản Phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tenSp"
                  placeholder="Nhập tên sản phẩm"
                  onInput={this.handleChangeInput}

                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Hình Ảnh
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="img"
                  placeholder="Nhập URL hình ảnh sản phẩm"
                  onInput={this.handleChangeInput}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Giá
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Nhập giá sản phẩm"
                  onInput={this.handleChangeInput}

                />
              </div>
            </div>
          </div>
          <button type="submit" onClick className="btn btn-primary">
            Thêm Sản Phẩm
          </button>
        </form>
      </div>
    );
  }
}
