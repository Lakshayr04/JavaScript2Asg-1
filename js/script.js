$(document).ready(function () {
    // JSON data for fictional characters
    const charactersData = [
    { firstName: 'Kapil', lastName: 'Sharma',  info: 'The Kapil Sharma Show, also known as TKSS, is an Indian Hindi-language stand-up comedy and talk show broadcast by Sony Entertainment Television' },
    { firstName: 'Bharti', lastName: 'Singh', info: 'Bharti Singh (born 3 July 1984), also known as Bharti Singh Limbachiya ,[3] is an Indian comedian and television personality.' },
    { firstName: 'Sunil', lastName: 'Grover', info: 'He came into limelight for his portrayal as Gutthi on television show Comedy Nights with Kapil but gained popularity for playing the role of Dr Mashhoor Gulati and Rinku Devi on The Kapil Sharma Show.' },
    { firstName: 'Navjot', lastName: 'Sidhu', info: 'Playing mostly as a top-order batter, Sidhu went on to play in 51 Tests and 136 One-Day-Internationals for his country. He came to be known for his six-hitting ability and earned the sobriquet "Sixer Sidhu".[4] After retirement, he turned to commentary and television, most notably as a judge of comedy shows, and as a permanent guest in Comedy Nights with Kapil (2013–2015) and later The Kapil Sharma Show (2016–2019).' },
    { firstName: 'Chandan', lastName: 'Prabhakar', info: 'Comedy Nights With Kapil is an Indian Hindi-language sketch comedy and celebrity talk show hosted and produced by comedian Kapil Sharma.' },
    { firstName: 'kiku', lastName: 'Sharda', info: 'He played the character of Hobo in Hatim, He is best known for his role as Constable Mulayam Singh Gulgule in F.I.R., and Akbar in the comedy show Akbar Birbal. He has worked in Comedy Nights with Kapil and its sequel The Kapil Sharma Show, playing various characters notably of Palak in the former.' },
    { firstName: 'Ali', lastName: 'Asgar', info: 'Ali Asgar is an Indian actor and stand-up comedian. He has appeared in many Indian TV serials and movies. Asgar appeared as Kamal Agarwal in Star Plus TV show Kahaani Ghar Ghar Ki.[1] He also appeared in SAB TV show F.I.R. as Inspector Raj Aryan.[2] He is commonly known for his role in Colors TV show Comedy Nights with Kapil as Dadi' },
];

    // Populating characters
    function populateTable(data) {
        const tbody = $('#characters-table tbody');
        tbody.empty();

        data.forEach(character => {
            const row = $('<tr>');
            row.append($('<td>').text(character.firstName));
            row.append($('<td>').text(character.lastName));
            row.append($('<td>').text(character.info));
            tbody.append(row);
        });
    }

    // Initial population of the table
    populateTable(charactersData);

    // Search functionality
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
    
        $('#characters-table tbody tr').removeClass('highlighted')
            .filter(function () {
                const firstName = $(this).find('td:first-child').text().toLowerCase();
                return searchTerm === '' || firstName.includes(searchTerm);
            })
            .addClass('highlighted');
    });
    



    // Filter buttons functionality
    $('#filter-a-m').on('click', function () {
        filterTable('A', 'M');
    });

    $('#filter-n-z').on('click', function () {
        filterTable('N', 'Z');
    });

    // Function to filter the table based on last name range
    function filterTable(startLetter, endLetter) {
        $('#characters-table tbody tr').each(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            const isInRange = lastName >= startLetter && lastName <= endLetter;

            if (isInRange) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        updateFilterButtonCounts();
    }

    // Function to update filter button counts
    function updateFilterButtonCounts() {
        const countAtoM = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'A' && lastName <= 'M';
        }).length;

        const countNtoZ = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'N' && lastName <= 'Z';
        }).length;

        $('#filter-a-m').text(`A - M (${countAtoM})`);
        $('#filter-n-z').text(`N - Z (${countNtoZ})`);
    }
});
