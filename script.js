window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }

    function interpolateColor(color1, color2, factor) {
      return color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
    }

    function rgbToHex(rgb) {
      return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('');
    }

    const startColor = hexToRgb('#f8f9fa');
    const endColor = hexToRgb('#ced4da');
    const currentColor = interpolateColor(startColor, endColor, scrollPercent);
    document.body.style.backgroundColor = rgbToHex(currentColor);
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }

    function interpolateColor(color1, color2, factor) {
      return color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
    }

    function rgbToHex(rgb) {
      return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('');
    }

    const startColor = hexToRgb('#ced4da');
    const endColor = hexToRgb('#f8f9fa');
    const currentColor = interpolateColor(startColor, endColor, scrollPercent);
    
    const sidebars = document.getElementsByClassName('sidebar');
    if (sidebars.length > 0) {
        sidebars[0].style.backgroundColor = rgbToHex(currentColor);
    }
});