<?php
require_once(APPPATH.'/../assets/pdfmerge/TCPDF-master/tcpdf.php');
require_once(APPPATH.'/../assets/pdfmerge/tcpdi/tcpdi.php');
TCPDF::SetAutoPageBreak();
date_default_timezone_set('Asia/Manila');
$date = date('Y/m/d');
// create new PDF document
$pdf= new TCPDI(PDF_PAGE_ORIENTATION, 'mm', PDF_PAGE_FORMAT, true, 'UTF-8', false);
$pdf->setSourceFile(APPPATH.'/..//assets/pdf/market-division-copy.pdf');
$pdf->SetDisplayMode(100);
$tpl = $pdf->importPage(1);
$size = $pdf->getTemplateSize($tpl);
$orientation = $size['h'] > $size['w'] ? 'P' : 'L';
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->addPage('P', 'A4');
$pdf->useTemplate($tpl, null, null, 0, 0, TRUE);


$txt = '    This is to certify that Mr./Mrs./Ms. '.$fname.' '.$mname.' '.$lname.' BY: ' .$sysuser.' is a ' .$client.', whose nature of business is '.$natbus.', With Map# '.$location_no.' at the '.$location.' San Pablo City Shopping Mall & public Market has ceased operating his/her business since '.$ceasedate.'                ';
$pdf->MultiCell(150, 1, $txt, 100, 'J', 100, 100, 33, 130, true);

$txt2 = '    Issued this '.$days.'th day of '.$month.', '.$year.' for whatever legal purpose it may serve.';

$pdf->MultiCell(150, 1, $txt2, 100, 'J', 100, 100, 33, 160, true);

$style = array(
    'border' => 2,
    'padding' => 'auto',
    'fgcolor' => array(0,0,0),
    'bgcolor' => array(255,255,255)
);
$pdf->write2DBarcode($refnum, 'QRCODE,H', 145, 215, 30, 30, $style, 'N');


$pdf->text(40, 214, $or_number);
$pdf->text(40, 219, $today);
$pdf->text(40, 224, $payment_amount);
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
ob_end_clean();
$pdf->Output('example_001.pdf', 'I');
exit;
