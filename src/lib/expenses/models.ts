
export enum TransactionType {
    Expense = "Expense",
    Transfer = "Transfer"
}


export interface Transaction {
    id: string
    name: string
    transactionType: TransactionType
    amount: number
    sourceId: string
    targetIds: string[]
}


export interface Project {
    id: string
    name: string
    transactions: Transaction[]
    members: string[]
}