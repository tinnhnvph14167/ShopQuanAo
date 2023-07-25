import dotenv from 'dotenv';
import Products from '../models/products';
import { productsSchema } from '../schemas/products';
import Category from '../models/category';
dotenv.config();

export const getAll = async (req, res) => {
  const { _limit = 10, _sort = 'createAt', _order = 'asc' } = req.query;

  const options = {
    customLabels: {
      docs: 'data',
      limit: _limit,
      sort: {
        [_sort]: _order === 'desc' ? -1 : 1,
      },
    },
    populate: {
      path: 'categoryId',
    },
  };
  try {
    const products = await Products.paginate({}, options);
    if (products.length === 0) {
      return res.status(404).json({
        message: 'Không có sản phẩm nào',
      });
    }
    return res.json({
      message: 'Lấy danh sách sản phẩm thành công',
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const Product = await Products.findById(req.params.id).populate('categoryId');

    if (!products) {
      return res.json({
        message: 'Không tìm thấy sản phẩm',
      });
    }
    return res.json({
      message: 'Lấy sản phẩm thành công',
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = productsSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const products = await Products.create(req.body);

    await Category.findByIdAndUpdate(products.categoryId, {
      $addToSet: { products: products._id },
    });
    console.log("products",products)

    if (!products) {
      return res.json({
        message: 'Thêm sản phẩm không thành công',
      });
    }
    return res.json({
      message: 'Thêm sản phẩm thành công',
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: "khong the them san pham",
    });
  }
};
export const update = async (req, res) => {
  try {
    const products = await Products.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!products) {
      return res.json({
        message: 'Cập nhật sản phẩm không thành công',
      });
    }
    return res.json({
      message: 'Cập nhật sản phẩm thành công',
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete(req.params.id);
    return res.json({
      message: 'Xóa sản phẩm thành công',
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const filterRom = async (req, res) => {
  try {
    const products = await Products.find({});
    const filterName = req.body.name;
    const dataFilter = (products || []).filter((x) => x.name.indexOf(filterName) >= 0);
    return res.json({
      dataFilter,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Loi Filter",
    });
  }
};
