/**
 * QR Code Generator
 * Bikin QR Code dari teks/URL pakai library qrcode.js
 * 
 * Author: Mhd Dimas Naufal
 */

// Ambil elemen DOM
const textInput = document.getElementById('text-input')
const sizeSelect = document.getElementById('size-select')
const colorDark = document.getElementById('color-dark')
const colorLight = document.getElementById('color-light')
const generateBtn = document.getElementById('generate-btn')
const downloadBtn = document.getElementById('download-btn')
const resetBtn = document.getElementById('reset-btn')
const resultDiv = document.getElementById('result')
const qrCanvas = document.getElementById('qr-canvas')

// Generate QR Code
function generateQR() {
    const text = textInput.value.trim()

    // Validasi input
    if (!text) {
        alert('Masukkan teks atau URL dulu!')
        textInput.focus()
        return
    }

    const size = parseInt(sizeSelect.value)
    const dark = colorDark.value
    const light = colorLight.value

    // Generate QR pakai library
    QRCode.toCanvas(qrCanvas, text, {
        width: size,
        margin: 2,
        color: {
            dark: dark,
            light: light
        },
        errorCorrectionLevel: 'H' // High error correction
    }, (error) => {
        if (error) {
            console.error(error)
            alert('Gagal generate QR Code: ' + error.message)
            return
        }

        // Tampilkan hasil
        resultDiv.style.display = 'block'
        downloadBtn.disabled = false

        // Scroll ke hasil
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
}

// Download QR Code sebagai PNG
function downloadQR() {
    if (!qrCanvas || downloadBtn.disabled) return

    // Buat link download
    const link = document.createElement('a')
    link.download = `qrcode_${Date.now()}.png`
    link.href = qrCanvas.toDataURL('image/png')
    link.click()
}

// Reset form
function resetForm() {
    textInput.value = ''
    sizeSelect.value = '300'
    colorDark.value = '#000000'
    colorLight.value = '#ffffff'
    resultDiv.style.display = 'none'
    downloadBtn.disabled = true
    textInput.focus()
}

// Event listeners
generateBtn.addEventListener('click', generateQR)
downloadBtn.addEventListener('click', downloadQR)
resetBtn.addEventListener('click', resetForm)

// Generate saat tekan Enter (Ctrl+Enter di textarea)
textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        generateQR()
    }
})

// Fokus ke input saat halaman load
window.addEventListener('load', () => {
    textInput.focus()
})