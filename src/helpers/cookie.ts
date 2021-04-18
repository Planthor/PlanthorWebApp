const cookie = {
    create: function (name: string, value: number, days?: number) {
        let expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie =
            name + "=" + value + expires + "; path=/;SameSite=Lax";
    },

    get: function (name: string) {
        var cname = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    },

    remove: function (name: string) {
        document.cookie =
            name +
            "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax";
    },
};

export default cookie;
