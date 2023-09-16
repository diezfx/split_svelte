
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

export interface User {
    id: string
}


export interface Project {
    id: string
    name: string
    transactions: Transaction[]
    members: string[]
}


export interface Cost {
    expenses: number
    income: number
    balance: number
}

export interface UserCosts {
    totalCosts: Cost
    projectCosts: { [key: string]: Cost }
}

export interface ProjectCosts {
    totalCosts: number
    costsByUser: { [key: string]: Cost }
}