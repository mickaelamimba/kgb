<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714222009 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE missions_stashs');
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E43B5F743');
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E719FB48E');
        $this->addSql('DROP INDEX IDX_34F1D47E43B5F743 ON missions');
        $this->addSql('DROP INDEX IDX_34F1D47E719FB48E ON missions');
        $this->addSql('ALTER TABLE missions DROP contacts_id, DROP targets_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE missions_stashs (missions_id INT NOT NULL, stashs_id INT NOT NULL, INDEX IDX_47F51B5217C042CF (missions_id), INDEX IDX_47F51B52EE826336 (stashs_id), PRIMARY KEY(missions_id, stashs_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE missions_stashs ADD CONSTRAINT FK_47F51B5217C042CF FOREIGN KEY (missions_id) REFERENCES missions (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE missions_stashs ADD CONSTRAINT FK_47F51B52EE826336 FOREIGN KEY (stashs_id) REFERENCES stashs (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE missions ADD contacts_id INT DEFAULT NULL, ADD targets_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E43B5F743 FOREIGN KEY (targets_id) REFERENCES targets (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E719FB48E FOREIGN KEY (contacts_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_34F1D47E43B5F743 ON missions (targets_id)');
        $this->addSql('CREATE INDEX IDX_34F1D47E719FB48E ON missions (contacts_id)');
    }
}
