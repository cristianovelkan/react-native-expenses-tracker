import axios from "axios";
import { FIREBASE_URL } from "../config";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(
      `${FIREBASE_URL}/expenses.json`,
      expenseData
    );
    const id = response.data.name;
    return id;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchExpenses() {
  const response = await axios.get(FIREBASE_URL + "/expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${FIREBASE_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${FIREBASE_URL}/expenses/${id}.json`);
}
