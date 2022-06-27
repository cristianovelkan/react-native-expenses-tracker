import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "ex1",
    description: "Rent",
    amount: 950,
    date: new Date("2022-06-28"),
  },
  {
    id: "ex2",
    description: "Course",
    amount: 50,
    date: new Date("2022-06-28"),
  },
  {
    id: "ex3",
    description: "Bananas",
    amount: 5,
    date: new Date("2022-06-25"),
  },
  {
    id: "ex4",
    description: "Eletric Bill",
    amount: 85,
    date: new Date("2022-06-30"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
