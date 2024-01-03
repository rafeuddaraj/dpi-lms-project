import { apiSlice } from "../apiSlice/apiSlice";

export const supportTicketApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTicket: builder.query({
            query: ({ studentId, supportId }) => `/supportTickets?supportId=${supportId}&studentId=${studentId}`
        }),
        ticketDelete: builder.mutation({
            query: ({ id, supportId, studentId }) => ({
                url: `/supportTickets/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const pathResult = dispatch(supportTicketApi.util.updateQueryData('getTicket', { studentId: arg.studentId, supportId: arg.supportId }, (draft) => {
                    const ticketIndex = draft.findIndex(ticket => ticket.id == arg.id)
                    console.log(ticketIndex);
                    draft.splice(ticketIndex, 1)
                }))
                try {
                    await queryFulfilled;
                } catch {
                    pathResult.undo()
                }
            }
        }),
        ticketBook: builder.mutation({
            query: (data) => ({
                url: '/supportTickets',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const ticket = await queryFulfilled;
                    dispatch(supportTicketApi.util.updateQueryData('getTicket', { studentId: arg.studentId, supportId: arg.supportId }, (draft) => {
                        draft.push(ticket.data)
                    }))
                } catch {
                    //
                }
            }
        })
    })
})

export const { useGetTicketQuery, useTicketBookMutation, useTicketDeleteMutation } = supportTicketApi