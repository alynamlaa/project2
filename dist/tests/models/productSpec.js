"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../../models/product");
const store = new product_1.ProductStore();
describe('Product model', () => {
    it('should have index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have create method', () => {
        expect(store.create).toBeDefined();
    });
    it('create method should add 1 product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            name: 'jacket',
            price: 1000,
            category: 'men',
        });
        expect(result).toEqual({
            product_id: 1,
            name: 'jacket',
            price: 1000,
            category: 'men',
        });
    }));
    it('index method should return list', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([
            {
                product_id: 1,
                name: 'jacket',
                price: 1000,
                category: 'men',
            },
        ]);
    }));
    it('show method should return single product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(1);
        expect(result).toEqual({
            product_id: 1,
            name: 'jacket',
            price: 1000,
            category: 'men',
        });
    }));
});