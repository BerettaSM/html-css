function toggleTable() {
    var table = `
    <table>
    <caption>População das Unidades Federativas</caption>
    <thead>
        <tr>
            <th scope="col">Estado</th>
            <th scope="col" style="width: 50px;">População</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>São Paulo</td>
            <td class="num">46.649.132</td>
        </tr>
        <tr>
            <td>Minas Gerais</td>
            <td class="num">21.411.923</td>
        </tr>
        <tr>
            <td>Rio de Janeiro</td>
            <td class="num">17.463.349</td>
        </tr>
        <tr>
            <td>Bahia</td>
            <td class="num">14.985.284</td>
        </tr>
        <tr>
            <td>Paraná</td>
            <td class="num">11.597.484</td>
        </tr>
        <tr>
            <td>Rio Grande do Sul</td>
            <td class="num">11.466.630</td>
        </tr>
        <tr>
            <td>Pernambuco</td>
            <td class="num">9.674.793</td>
        </tr>
        <tr>
            <td>Ceará</td>
            <td class="num">9.240.580</td>
        </tr>
        <tr>
            <td>Pará</td>
            <td class="num">8.777.124</td>
        </tr>
        <tr>
            <td>Santa Catarina</td>
            <td class="num">7.338.473</td>
        </tr>
        <tr>
            <td>Goiás</td>
            <td class="num">7.206.589</td>
        </tr>
        <tr>
            <td class="sticky">Maranhão</td>
            <td class="sticky num">7.153.262</td>
        </tr>
        <tr>
            <td>Amazonas</td>
            <td class="num">4.269.995</td>
        </tr>
        <tr>
            <td>Espírito Santo</td>
            <td class="num">4.108.508</td>
        </tr>
        <tr>
            <td>Paraíba</td>
            <td class="num">4.059.905</td>
        </tr>
        <tr>
            <td>Mato Grosso</td>
            <td class="num">3.567.234</td>
        </tr>
        <tr>
            <td>Rio Grande do Norte</td>
            <td class="num">3.560.903</td>
        </tr>
        <tr>
            <td>Alagoas</td>
            <td class="num">3.365.351</td>
        </tr>
        <tr>
            <td>Piauí</td>
            <td class="num">3.289.290</td>
        </tr>
        <tr>
            <td>Distrito Federal</td>
            <td class="num">3.094.325</td>
        </tr>
        <tr>
            <td>Mato Grosso do Sul</td>
            <td class="num">2.839.188</td>
        </tr>
        <tr>
            <td>Sergipe</td>
            <td class="num">2.338.474</td>
        </tr>
        <tr>
            <td>Rondônia</td>
            <td class="num">1.815.278</td>
        </tr>
        <tr>
            <td>Tocantins</td>
            <td class="num">1.607.363</td>
        </tr>
        <tr>
            <td>Acre</td>
            <td class="num">906.876</td>
        </tr>
        <tr>
            <td>Amapá</td>
            <td class="num">877.613</td>
        </tr>
        <tr>
            <td>Roraima</td>
            <td class="num">652.713</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Total de Habitantes</th>
            <td class="num"><strong>210.147.125</strong></td>
        </tr>
    </tfoot>
</table>
    `;
    var destiny = document.getElementById('demo');
    if (destiny.innerHTML) {
        destiny.innerHTML = "";
    } else {
        destiny.innerHTML = table;
    }
}
