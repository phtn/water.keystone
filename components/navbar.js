import React from "react";
import Link from "next/link";
import Sea from "../assets/sea.svg";

const styles = {
  container: {
    height: 50,
    backgroundColor: "#066b98",
    display: "flex",
    alignItems: "center",
    width: "inherit"
  },
  sea: {
    width: 50,
    padding: 20
  },
  brandContainer: {
    padding: 20
  },
  brand: {
    color: "#eee",
    fontFamily: "Rajdhani, sans-serif",
    fontSize: "1.8em",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none"
  },
  links: {
    color: "#ccc",
    textDecoration: "none",
    fontFamily: "Rajdhani, sans-serif",

    height: "100%",
    padding: 20,
    float: "right"
  },
  linksContainer: {
    width: "100%"
  }
};

const Navbar = props => {
  const links = [
    { id: 0, title: "company" },
    { id: 1, title: "blog" },
    { id: 2, title: "products" }
  ];
  const { navPad, brand } = props;

  return (
    <header>
      <nav
        style={Object.assign({}, styles.container, {
          paddingLeft: navPad,
          paddingRight: navPad
        })}
      >
        <div>
          <Link href="/">
            <a style={styles.sea}>
              <Sea height={25} width={25} />
            </a>
          </Link>
        </div>

        <div style={styles.brandContainer}>
          <Link href="/">
            <a style={styles.brand}>{brand}</a>
          </Link>
        </div>

        <div style={styles.linksContainer}>
          {links.map(link => (
            <Link key={link.id} href={`/${link.title}`}>
              <a
                style={styles.links}
                onMouseOver={e => (e.target.style.color = "#ffd454")}
                onMouseOut={e => (e.target.style.color = "#ccc")}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Navbar