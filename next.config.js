const { createSecureHeaders } = require("next-secure-headers");



module.exports =
    { async headers() {
        return [
          {
            source: "/(.*)",
            headers: createSecureHeaders({
              contentSecurityPolicy: {
                directives: {
                  defaultSrc: ["'self'"],
                  styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
                  imgSrc: ["'self'", "data:"],
                  fontSrc: ["'self'", "https://fonts.gstatic.com"],
                  connectSrc: ["'self'", "https://www.google-analytics.com"],
                  scriptSrc: ["'self'", "'sha256-X+zrZv/IbzjZUnhsbWlsecLbwjndTpG0ZynXOif7V+k='", "https://www.googletagmanager.com", "'sha256-jPzOZpPUtOK2pQvtcWCQvDmmO+Q/77PPVy2NP/YhKao='", "https://www.google-analytics.com"]
                },
              },
              frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
             
             
            }),
          },
          
        ];
      },
    
    }
