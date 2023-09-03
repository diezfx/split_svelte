import { createExpenseApi } from "$lib/expenses/api"
import { TransactionType, type Project, type Transaction } from "$lib/expenses/models.js"
import { redirect, type Actions } from "@sveltejs/kit"
import { v4 } from "uuid"

export const actions = {
    default: async ({ fetch, request, url, locals: { supabase }, params }) => {
        const formData = await request.formData()

        const name = formData.get("name")
        const amount: number = Number(formData.get("amount"))
        const sourceId = formData.get("sourceId")
        const targetIds = formData.getAll("targetIds")
        const transactionTypeStr = formData.get("transactionType")
        let transactionType = TransactionType.Expense
        if (transactionTypeStr == TransactionType.Transfer) {
            transactionType = TransactionType.Transfer
        }



        let transaction = { id: v4(), amount: amount, name: name, sourceId: sourceId, targetIds: targetIds, transactionType: transactionType } as Transaction

        const expenseApi = createExpenseApi(fetch)

        await expenseApi.addTransaction(params.id!, transaction)

        throw redirect(303, `/projects/${params.id}`)
    },
} satisfies Actions