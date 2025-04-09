//import...
const express = require('express')
const router = express.Router()

// import controllers
const { HListlf, HListNG, HListlsuesf, HListlsuesfNG, HProgressL, HProgressAll
    , HProgressL2, HProgressNG2 ,HSucceedL ,HSucceedAll ,HSucceedL2 ,HSucceedNG2,Hmovedata,Hgetid,HUpdate,getAllHealthIssues,HAllPailom,HAllPaingen
 } = require('../controllers/health')



router.get('/HListlf',HListlf)
router.get('/HListNG',HListNG)
router.get('/HListlsuesf',HListlsuesf)
router.get('/HListlsuesfNG',HListlsuesfNG)
router.get('/HProgressL',HProgressL)
router.get('/HProgressAll',HProgressAll)
router.get('/HProgressL2',HProgressL2)
router.get('/HProgressNG2',HProgressNG2)
router.get('/HSucceedL',HSucceedL)
router.get('/HSucceedAll',HSucceedAll)
router.get('/HSucceedL2',HSucceedL2)
router.get('/HSucceedNG2',HSucceedNG2)
router.delete('/Hmovedata/:id',Hmovedata)
router.get('/Hgetid/:report_id',Hgetid)
router.put('/HUpdate/:health_issue_id',HUpdate)
router.get('/getAllHealthIssues',getAllHealthIssues)
router.get('/HAllPaingen',HAllPaingen)
router.get('/HAllPailom',HAllPailom)


module.exports = router


