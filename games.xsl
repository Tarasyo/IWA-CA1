<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="table" class="indent">
                    <thead>
                        <tr>
                            <th colspan="5">Taras Nintendo Swithch Game Collection</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Publisher</th>
                            <th>Release</th>
                            <th>Director</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/nintendo/games">
                            <tr>
                                <td colspan="2">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="game">
                            <tr id="{position()}">
                                <td>
                                    <xsl:value-of select="name" />
                                </td>
                                <td>
                                    <xsl:value-of select="publisher" />
                                </td>
                                <td>
                                    <xsl:value-of select="release" />
                                </td>
                                <td>
                                    <xsl:value-of select="director" />
                                </td>
                                <td>
                                    <xsl:value-of select="rank" />
                                </td>
                            </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table><br/>
    </xsl:template>
</xsl:stylesheet>