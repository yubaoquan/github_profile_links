$(() => {
    if (location.hostname === 'github.com') {
        const username = getUsername();
        const ul = $('ul.d-flex')[0];
        const li = $('<li style="position: relative;"></li>');
        const a = $('<a class="header-navlink" href="javascript:;" data-pass="1">Profile Links</a>')
        let showMenu = false;

        a.click((e) => {
            e.preventDefault();
            if (showMenu) {
                li.children('.dropdown-menu-content').hide();
            } else {
                li.children('.dropdown-menu-content').show();
            }
            showMenu = !showMenu;
        });

        $('body').click((e) => {
            if (e.target.dataset.pass === '1') {
                return;
            }
            li.children('.dropdown-menu-content').hide();
            showMenu = false;
        })

        li.append(a);
        li.append(createDropdownMenu(username));
        $(ul).append(li);
    }

    function createDropdownMenu(username) {
        return $(`
            <div class="dropdown-menu-content">
                <ul class="dropdown-menu dropdown-menu-sw">
                    <a class="dropdown-item" href="/${username}">
                        Overview
                    </a>

                    <a class="dropdown-item" href="/${username}?tab=repositories">
                        Repositories
                    </a>

                    <a class="dropdown-item" href="/${username}?tab=stars" >
                        Stars
                    </a>

                    <a class="dropdown-item" href="/${username}?tab=followers">
                        Followers
                    </a>

                    <a class="dropdown-item" href="/${username}?tab=following">
                        Following
                    </a>
                </ul>
            </div>
    `);
    }

    function getUsername() {
        return document.querySelector('.header-nav-current-user strong').textContent;
    }
});
