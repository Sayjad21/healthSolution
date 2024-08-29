import React, { Fragment } from "react";

export default function RecipeCard({ rec, type }) {
    console.log(rec, type);

    const image = rec.recipe.image; // url
    const label = rec.recipe.label;
    const source = rec.recipe.source;
    const url = rec.recipe.url; // url
    const cuisineType = rec.recipe.cuisineType;
    const dietLabels = rec.recipe.dietLabels; // array
    const healthLabels = rec.recipe.healthLabels; // array

    console.log(image, label, source, url, cuisineType, dietLabels, healthLabels);

    const capitalize = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    

    return (
        <Fragment>
            <div style={styles.card}>
                <div style={styles.imageContainer}>
                    <img src={image} alt={label} style={styles.image} />
                </div>
                <div style={styles.content}>
                    <h2 style={styles.title}>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={styles.link}><u>{label}</u></a>
                    </h2>
                    <p style={styles.source}>Source: {source}</p>
                    <p style={styles.cuisineType}><b>Cuisine Type:</b> {cuisineType.map(capitalize).join(", ")}</p>
                    <div style={styles.labelsContainer}>
                        {dietLabels.length > 0 && (
                            <div style={styles.labelGroup}>
                                <span style={styles.fieldTitle}>Dietary Preferences:</span>
                                {dietLabels.map((label, index) => (
                                    <span key={index} style={styles.label}>{label}</span>
                                ))}
                            </div>
                        )}
                        {healthLabels.length > 0 && (
                            <div style={styles.labelGroup}>
                                <span style={styles.fieldTitle}>Health Labels:</span>
                                {healthLabels.map((label, index) => (
                                    <span key={index} style={styles.label}>{label}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const styles = {
    card: {
        backgroundColor: "rgb(0,0,255,0.1)",
        border: "1px solid #ddd",
        height: "300px",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
    },
    imageContainer: {
        flex: "1 1 100px"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    content: {
        flex: "2 1 300px",
        padding: "16px"
    },
    title: {
        fontSize: "24px",
        margin: "0 0 8px 0"
    },
    link: {
        textDecoration: "none",
        color: "#333"
    },
    source: {
        fontSize: "14px",
        color: "black",
        marginBottom: "8px"
    },
    cuisineType: {
        fontSize: "14px",
        color: "black",
        marginTop: "30px",
        marginBottom: "18px"
    },
    labelsContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: "8px"
    },
    labelGroup: {
        marginBottom: "8px"
    },
    fieldTitle: {
        fontSize: "14px",
        fontWeight: "bold",
        marginRight: "8px"
    },
    label: {
        backgroundColor: "rgb(0,0,255,0.2)",
        borderRadius: "20px",
        padding: "4px 8px",
        fontSize: "12px",
        color: "#555",
        marginRight: "4px",
        marginBottom: "4px",
        display: "inline-block"
    }
};
