function formatoMoneda(monto) {
        return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(monto);
}