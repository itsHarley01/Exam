import { Router } from "express"

const router = Router()

const subject = "ITE314"
const exam = "P2"
const nodess = "NODEJS"


router.get('/subject', (req, res) => {
    res.status(200).send(subject)
})

router.get('/exam', (req, res) => {
    res.status(200).send(exam)
})

router.get('/node', (req, res) => {
    res.status(200).send(nodess)
})

router.get('/mydata', (req, res) => {
    res.status(200).send({ subject: subject, exam: exam, node: nodess })
})

export default router