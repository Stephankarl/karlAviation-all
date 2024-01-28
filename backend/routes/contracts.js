const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//IMPORT FILES
const Contract = require('../models/Contracts')
const controllers = require('../controllers/contractControllers')
const invoiceController = require('../controllers/invoiceControllers')

// ******************************************************************** 

router
    .route('/')
    .get(controllers.getContracts)
    .post(controllers.addContract)

router
    .route('/:id')
    .post(controllers.editContract)
    .patch(controllers.editContract)
    .delete(controllers.deleteContract)

router
    .route('/:id/confirm')
    .patch(controllers.confirmController)

router
    .route('/:id/cancel')
    .patch(controllers.cancelContract)

router
    .route('/:id/complete')
    .post(controllers.completeController)

router
    .route('/:id/expenses')
    .post(controllers.expenseController)

router
    .route('/:id/payment')
    .post(controllers.paymentController)
    
// router
//     .route('/:id/invoice')
//     .post(invoiceController.generateInvoice)

// router.post('/:id/invoice', (req, res) => {
//     Contract.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedContract) => {
//         if (err) throw err
//         const { endDate, invoice, userId } = req.body
//         //Create the invoice
//         pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/../invoices/${userId}/${moment(endDate).format('YYYY')}/${invoice.invoiceNumber}.pdf`, err => {
//             if (err) 
//                 res.send(Promise.reject())
//         })
//         res.send({ data: updatedContract })
//     })
// })

// router.get('/:id/invoice', async (req, res) => {
//     const contract = await Contract.findById(req.params.id)
//     res.sendFile(`${__dirname}/../invoices/${contract.userId}/${moment(contract.endDate).format('YYYY')}/${contract.invoice.invoiceNumber}.pdf`, { 'root': '/'})
// })

router.delete('/:id', (req, res) => {
    Contract.findByIdAndDelete(req.params.id, err => {
        if (err) throw err
        res.send(req.params.id)
    })
})

module.exports = router;