import { View, Button, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Input from "./Input";

function ExpenseForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Expense Data</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0,00",
            onChangeText: () => {},
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          placeholder: "...",
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 45,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    color: "white",
    textAlign: "center",
  },
});
